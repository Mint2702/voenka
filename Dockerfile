FROM python:3.8.5


COPY /voenka/ /voenka/

RUN pip install -r voenka/requirements.txt

CMD ["python3",  "voenka/main.py"]