# Digital education

### Requires: 
- python 3.9
- Docker

### To start:
#### 1. Create virtual environment:
- for Windows:
```
python -m venv venv
venv\Scripts\activate
pip install --no-cache-dir --upgrade -r requirements.txt
```

- for Unix:
```
python -m venv venv
source venv/bin/activate
pip install --no-cache-dir --upgrade -r requirements.txt
```

#### 2. Add to `/backend`  file `.env`
```
DATABASE_URL = postgresql+psycopg2://postgres:postgres@db:5432

# to get a secret key run:
# openssl rand -hex 32
SECRET_KEY = "secret_key_you_got"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
```
#### 3. Build containers
```
docker-compose build
```
#### 4. Run migrations
```
docker-compose run web alembic revision --autogenerate -m "New mig"
```
#### 5. Start application
```
docker-compose up
```
