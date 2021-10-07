from pyqrcode import create


global_url = "http://localhost:5000"

def create_qr(mongo_id: str) -> str:
    url = create(f"{global_url}/qr/{mongo_id}")
    file_name = f"./static/qrs/qr_{mongo_id}.svg"
    url.svg(file_name, scale=8)

    return file_name