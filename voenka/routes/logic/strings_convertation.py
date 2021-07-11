def fio_convert(fio: str) -> str:
    fio = fio.split(" ")
    new_fio = ""
    for name in fio:
        word = name[0]
        word += "*" * (len(name)-1)
        new_fio += f"{word} "
    return new_fio