# Pull base image
FROM python:3.9

WORKDIR /usr/src/app
# Set environment varibles
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1



# COPY alembic.ini /code/

# Install dependencies
COPY ./requirements.txt .
RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY . .

# COPY ./alembic /code/backend/alembic

EXPOSE 8000