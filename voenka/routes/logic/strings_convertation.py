def fio_convert(fio: str) -> str:
    fio = fio.strip()
    fio = fio.split(" ")
    new_fio = ""
    for i in range(3):
        name = fio[i]
        word = name[0]
        word += "*" * (len(name)-1)
        new_fio += f"{word} "
    return new_fio

test = fio_convert("Петров Глеб Васильевич   ")
print(test)