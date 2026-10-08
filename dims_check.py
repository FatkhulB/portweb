import struct

def png_size(p):
    with open(p, 'rb') as f:
        d = f.read(26)
    w, h = struct.unpack('>II', d[16:24])
    return (w, h)

def jpg_size(p):
    with open(p, 'rb') as f:
        d = f.read()
    i = 2
    n = len(d)
    while i < n:
        if d[i] != 0xFF:
            i += 1
            continue
        m = d[i + 1]
        if m in (0xC0, 0xC1, 0xC2, 0xC3):
            h, w = struct.unpack('>HH', d[i + 5:i + 9])
            return (w, h)
        if m in (0xD8, 0xD9, 0x01) or 0xD0 <= m <= 0xD7:
            i += 2
            continue
        ln = struct.unpack('>H', d[i + 2:i + 4])[0]
        i += 2 + ln
    return None

for p in ['assets/projects/1.jpg', 'assets/projects/2.jpg', 'assets/projects/3.jpg']:
    with open(p, 'rb') as f:
        sig = f.read(8)
    if sig[:4] == b'\x89PNG':
        print(p, 'PNG', png_size(p))
    else:
        print(p, 'JPEG', jpg_size(p))