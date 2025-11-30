#----------------[IMPORT MODEL]--------------------#
import os
from sentence_transformers import SentenceTransformer



model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')


# list of the snetance 
sentance = ["This is an example sentence", "Each sentence is converted"]

# Generate the embeddings
embeddings = model.encode(sentance)

# Print the embeddings
for sentence, embedding in zip(sentance, embeddings):
    print("Sentence:", sentence)
    print("Embedding:", embedding)
    print("")
    print("--------------------------------------------------")