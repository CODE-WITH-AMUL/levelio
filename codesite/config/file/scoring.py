
from transformers import AutoTokenizer, AutoModelForCausalLM, pipeline

# -------------------------
# 1️⃣ Set your Hugging Face token here


# -------------------------
# 2️⃣ Choose a small free model for testing
# -------------------------
# For testing on low-end laptops, use 1B or 3B models
MODEL_NAME = "EleutherAI/gpt-neo-1.3B"  # smaller model for testing
# MODEL_NAME = "google/gemma-3-1b"      # alternative Gemma 1B model

# -------------------------
# 3️⃣ Load tokenizer and model
# -------------------------
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME, token=API_TOKEN)
model = AutoModelForCausalLM.from_pretrained(MODEL_NAME, token=API_TOKEN)

# Create a text generation pipeline
generator = pipeline("text-generation", model=model, tokenizer=tokenizer)

# -------------------------
# 4️⃣ Prompt for testing
# -------------------------
prompt = "Explain gravity in simple words."

# Generate text
output = generator(prompt, max_new_tokens=100, do_sample=True)
print("\n=== Generated Output ===\n")
print(output[0]['generated_text'])
