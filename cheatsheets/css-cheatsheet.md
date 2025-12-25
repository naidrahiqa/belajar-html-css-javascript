# 📖 CSS Cheatsheet - Referensi Lengkap

## 📝 Syntax Dasar

```css
selector {
    property: value;
}
```

## 🎯 Selectors

| Selector | Deskripsi | Contoh |
|----------|-----------|---------|
| `*` | Universal | `* { margin: 0; }` |
| `element` | Element | `p { color: red; }` |
| `.class` | Class | `.btn { ... }` |
| `#id` | ID | `#header { ... }` |
| `element.class` | Element + Class | `p.intro { ... }` |
| `element, element` | Group | `h1, h2 { ... }` |
| `element element` | Descendant | `div p { ... }` |
| `element > element` | Child | `div > p { ... }` |
| `element + element` | Adjacent sibling | `h1 + p { ... }` |
| `element ~ element` | General sibling | `h1 ~ p { ... }` |

## 🌈 Colors

```css
/* Named colors */
color: red;

/* Hex */
color: #ff0000;
color: #f00; /* Short */

/* RGB */
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5); /* Alpha */

/* HSL */
color: hsl(0, 100%, 50%);
color: hsla(0, 100%, 50%, 0.5);
```

## 📦 Box Model

```css
/* Full */
margin: 10px 20px 10px 20px; /* top right bottom left */
padding: 10px 20px; /* top-bottom left-right */

/* Individual */
margin-top: 10px;
padding-left: 20px;

/* Width & Height */
width: 300px;
max-width: 100%;
height: 200px;
min-height: 100px;

/* Border */
border: 1px solid black;
border-radius: 10px;

/* Box-sizing */
box-sizing: border-box; /* Include padding & border */
```

## 📐 Display & Position

```css
/* Display */
display: block | inline | inline-block | none;
display: flex | grid;

/* Position */
position: static | relative | absolute | fixed | sticky;
top: 10px;
right: 20px;
z-index: 100;

/* Float (Legacy) */
float: left | right | none;
clear: both;
```

## 🎨 Flexbox

```css
.container {
    display: flex;
    flex-direction: row | column;
    justify-content: flex-start | center | flex-end | space-between | space-around;
    align-items: flex-start | center | flex-end | stretch;
    flex-wrap: wrap | nowrap;
    gap: 10px;
}

.item {
    flex: 1; /* grow shrink basis */
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 200px;
    order: 1;
    align-self: center;
}
```

## 🏗️ Grid

```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 100px auto;
    gap: 20px;
    grid-auto-flow: row | column;
}

.item {
    grid-column: 1 / 3; /* span 2 columns */
    grid-row: 1 / 2;
    grid-area: header; /* Named area */
}
```

## ✍️ Typography

```css
/* Font */
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: normal | bold | 700;
font-style: normal | italic;
line-height: 1.6;

/* Text */
text-align: left | center | right | justify;
text-decoration: none | underline | line-through;
text-transform: uppercase | lowercase | capitalize;
letter-spacing: 2px;
word-spacing: 5px;
```

## 🎭 Pseudo-classes

```css
/* Link states */
a:link { }
a:visited { }
a:hover { }
a:active { }
a:focus { }

/* Structural */
:first-child
:last-child
:nth-child(2)
:nth-child(odd)
:nth-child(3n)
:not(.class)
:only-child

/* Form */
:checked
:disabled
:enabled
:required
:valid
:invalid
```

## 🎨 Pseudo-elements

```css
::before { content: "→"; }
::after { content: "←"; }
::first-letter { font-size: 2em; }
::first-line { font-weight: bold; }
::selection { background: yellow; }
::placeholder { color: #ccc; }
```

## 🌟 Transitions & Animations

```css
/* Transition */
transition: property duration timing-function delay;
transition: all 0.3s ease;

/* Animation */
@keyframes slidein {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}

.element {
    animation: slidein 1s ease-in-out infinite;
}
```

## 🔄 Transform

```css
/* 2D */
transform: translate(50px, 100px);
transform: rotate(45deg);
transform: scale(1.5);
transform: skew(20deg, 10deg);

/* 3D */
transform: rotateX(45deg);
transform: rotateY(45deg);
transform: perspective(500px);
```

## 📱 Media Queries

```css
/* Mobile first */
@media (min-width: 768px) {
    /* Tablet */
}

@media (min-width: 1024px) {
    /* Desktop */
}

/* Common breakpoints */
@media (max-width: 575px) { /* Phone */ }
@media (min-width: 576px) { /* Phone landscape */ }
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 992px) { /* Desktop */ }
@media (min-width: 1200px) { /* Large desktop */ }
```

## 🎯 Units

| Unit | Deskripsi |
|------|-----------|
| `px` | Pixels (absolute) |
| `%` | Percentage (relative to parent) |
| `em` | Relative to font-size |
| `rem` | Relative to root font-size |
| `vw` | 1% of viewport width |
| `vh` | 1% of viewport height |
| `vmin` | Smaller of vw/vh |
| `vmax` | Larger of vw/vh |
| `ch` | Width of "0" character |
| `ex` | Height of "x" character |

## 🔧 Important Properties

```css
/* Background */
background-color: #fff;
background-image: url('img.jpg');
background-size: cover | contain;
background-position: center;
background-repeat: no-repeat;

/* Shadow */
box-shadow: 0 4px 6px rgba(0,0,0,0.1);
text-shadow: 2px 2px 4px #000;

/* Overflow */
overflow: visible | hidden | scroll | auto;

/* Cursor */
cursor: pointer | default | not-allowed;

/* Visibility */
visibility: visible | hidden;
opacity: 0.5;

/* List */
list-style: none;
list-style-type: disc | circle | square;
```
