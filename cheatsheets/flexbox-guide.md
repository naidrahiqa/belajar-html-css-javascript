# 🎨 Flexbox Visual Guide

## 📦 Container Properties

### `display: flex`
Aktifkan Flexbox mode pada container

### `flex-direction`
Mengatur arah utama (main axis)

```
row (default)     →  [1] [2] [3]
row-reverse       ←  [3] [2] [1]
column            ↓  [1]
                     [2]
                     [3]
column-reverse    ↑  [3]
                     [2]
                     [1]
```

### `justify-content`
Perataan sepanjang main axis (horizontal jika row)

```
flex-start     [1][2][3]________________
center         ________[1][2][3]________
flex-end       ________________[1][2][3]
space-between  [1]______[2]______[3]
space-around   __[1]____[2]____[3]__
space-evenly   ___[1]___[2]___[3]___
```

### `align-items`
Perataan sepanjang cross axis (vertical jika row)

```
flex-start     [1][2][3]  (top)
center         [1][2][3]  (middle)
flex-end       [1][2][3]  (bottom)
stretch        [====]
               [====]
               [====]
```

### `flex-wrap`
Apakah item boleh wrap ke baris baru?

```
nowrap  [1][2][3][4][5] → overflow jika sempit
wrap    [1][2][3]
        [4][5]
```

### `align-content`
Perataan BARIS jika wrap aktif (butuh multi-line)

## 🎯 Item Properties

### `flex-grow`
Seberapa rela item membesar mengisi ruang kosong

```
.item1 { flex-grow: 1; }  →  [====]
.item2 { flex-grow: 2; }  →  [========]
```

### `flex-shrink`
Seberapa rela item mengecil saat sempit

### `flex-basis`
Ukuran awal item sebelum distribusi ruang

### `order`
Urutan tampilan (default: 0)

```
[1: order-2] [2: order-1] [3: order-3]
Display as:  [2] [1] [3]
```

### `align-self`
Override align-items untuk item tertentu

## 💡 Common Patterns

### Center Everything
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### Space Between Navigation
```css
.nav {
    display: flex;
    justify-content: space-between;
}
```

### Equal Width Columns
```css
.column {
    flex: 1; /* grow=1, shrink=1, basis=0 */
}
```

### Sticky Footer
```css
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
main {
    flex: 1;
}
```
