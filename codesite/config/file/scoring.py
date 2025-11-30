import torch
from transformers import AutoTokenizer, AutoModelForCausalLM

# Load tokenizer
tokenizer = AutoTokenizer.from_pretrained("openlm-research/open_llama_3b")

# Load model
model = AutoModelForCausalLM.from_pretrained(
    "openlm-research/open_llama_3b",
    torch_dtype=torch.float16,  # <--- requires torch imported
    device_map="auto"
)

# Test prompt
prompt = "Q: What is the largest animal?\nA:"
inputs = tokenizer(prompt, return_tensors="pt").to(model.device)

outputs = model.generate(inputs.input_ids, max_new_tokens=50, do_sample=True)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
