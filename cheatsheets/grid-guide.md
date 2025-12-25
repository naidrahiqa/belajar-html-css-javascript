# 🏗️ CSS Grid Visual Guide

## 📐 Container Properties

### `display: grid`
Aktifkan Grid mode

### `grid-template-columns`
Definisi kolom

```css
grid-template-columns: 100px 200px 100px;
/* Kolom 1: 100px, Kolom 2: 200px, Kolom 3: 100px */

grid-template-columns: 1fr 2fr 1fr;
/* 1:2:1 ratio */

grid-template-columns: repeat(3, 1fr);
/* 3 kolom sama lebar */

grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
/* Responsive, min 200px per kolom */
```

Visual:
```
100px  200px  100px
[===] [======] [===]
```

### `grid-template-rows`
Sama seperti columns, tapi untuk baris

```css
grid-template-rows: 100px auto 50px;
/* Baris 1: 100px, Baris 2: auto, Baris 3: 50px */
```

### `gap`
Jarak antar sel

```css
gap: 20px;              /* row & column gap */
row-gap: 20px;
column-gap: 10px;
```

Visual:
```
[A] gap [B]
gap
[C] gap [D]
```

### `grid-template-areas`
Named grid areas

```css
grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
```

Visual:
```
[====HEADER====]
[SIDE][==MAIN==]
[====FOOTER====]
```

## 🎯 Item Properties

### `grid-column`
Posisi kolom item

```css
grid-column: 1 / 3;  /* Dari garis 1 sampai 3 (span 2 kolom) */
grid-column: span 2; /* Span 2 kolom */
```

Visual:
```
Garis: 1    2    3    4
       [==ITEM==] [ ]
```

### `grid-row`
Posisi baris item

```css
grid-row: 1 / 3;     /* Dari garis 1 sampai 3 */
grid-row: span 2;    /* Span 2 baris */
```

### `grid-area`
Shorthand atau named area

```css
grid-area: header;              /* Named area */
grid-area: 1 / 1 / 3 / 4;      /* row-start / col-start / row-end / col-end */
```

## 💡 Common Patterns

### 3-Column Layout
```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```

### Sidebar Layout
```css
.container {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
}
```

### Responsive Grid
```css
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
```

### 12-Column System (Bootstrap-like)
```css
.container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
}

.col-6 {
    grid-column: span 6; /* 50% */
}

.col-4 {
    grid-column: span 4; /* 33.33% */
}
```

## 🆚 Grid vs Flexbox

**Grid**: 2 dimensi (rows & columns)
```
[A][B][C]
[D][E][F]
```

**Flexbox**: 1 dimensi (row OR column)
```
[A][B][C][D][E][F] → horizontal
atau
[A]
[B]
[C] ↓ vertical
```

**Kapan Grid?**
- Layout halaman utama
- Gallery/grid of cards
- Complex layouts

**Kapan Flexbox?**
- Navigation bars
- Single row/column layouts
- Centering items
