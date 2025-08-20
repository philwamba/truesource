# 🌐 TrueSource

**TrueSource** is an open-source AI-powered platform for verifying information from multiple sources.  
It helps users check claims, analyze evidence, and understand the reliability of news, articles, or social posts — with transparent citations and AI-assisted explanations.

---

## 🚀 Features

- **Claim Verification**: Submit a statement and get evidence that supports, refutes, or cannot confirm it.  
- **Multi-Source Retrieval**: Pulls information from diverse and trusted sources.  
- **AI-Powered Analysis**: Uses Natural Language Inference (NLI) and LLM summarization to weigh the evidence.  
- **Transparency First**: Every verdict includes citations, timestamps, and source confidence scores.  
- **Open & Extensible**: Modular architecture for plugging in new models, APIs, and crawlers.  

---

## 🏗️ Architecture

- **Frontend**: [Next.js](https://nextjs.org/) + TailwindCSS (v4) + shadcn/ui  
- **Backend**: [FastAPI](https://fastapi.tiangolo.com/) (Python)  
- **Database**: PostgreSQL + pgvector (for embeddings)  
- **Search**: Hybrid retrieval with BM25 + dense vector search  
- **Models**: Hugging Face transformers (e.g. DeBERTa MNLI, Sentence Transformers)  
- **Workers**: Celery / Redis for async crawling & processing  

---

## 📦 Getting Started

### Prerequisites
- Node.js (>= 18)  
- Python (>= 3.10)  
- PostgreSQL (>= 14)  
- Redis  

### Clone the repo
```bash
git clone https://github.com/philwamba/truesource.git
cd truesource
```

