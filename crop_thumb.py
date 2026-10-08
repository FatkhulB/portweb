from PIL import Image

p = 'assets/projects/3.jpg'
img = Image.open(p).convert('RGB')
w, h = img.size
print('before:', w, h, 'ratio:', round(w / h, 4))
target = 16 / 9
if w / h > target:
    nw = int(h * target)
    x = (w - nw) // 2
    img = img.crop((x, 0, x + nw, h))
else:
    nh = int(w / target)
    y = (h - nh) // 2
    img = img.crop((0, y, w, y + nh))
print('after:', img.size, 'ratio:', round(img.size[0] / img.size[1], 4))
img.save(p, 'JPEG', quality=88)
print('saved')