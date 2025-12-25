# 📖 HTML Cheatsheet - Referensi Lengkap

## 📄 Struktur Dasar

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Judul Halaman</title>
</head>
<body>
    <!-- Konten di sini -->
</body>
</html>
```

## 🏷️ Text Formatting

| Tag | Deskripsi | Contoh |
|-----|-----------|---------|
| `<h1>` - `<h6>` | Heading | `<h1>Judul</h1>` |
| `<p>` | Paragraph | `<p>Teks paragraf</p>` |
| `<b>` | Bold | `<b>Tebal</b>` |
| `<strong>` | Important (bold, semantic) | `<strong>Penting</strong>` |
| `<i>` | Italic | `<i>Miring</i>` |
| `<em>` | Emphasis (italic, semantic) | `<em>Emphasis</em>` |
| `<u>` | Underline | `<u>Garis bawah</u>` |
| `<mark>` | Highlight | `<mark>Highlight</mark>` |
| `<small>` | Teks kecil | `<small>Kecil</small>` |
| `<del>` | Deleted text | `<del>Dihapus</del>` |
| `<ins>` | Inserted text | `<ins>Ditambah</ins>` |
| `<sub>` | Subscript | `H<sub>2</sub>O` |
| `<sup>` | Superscript | `x<sup>2</sup>` |

## 🔗 Links & Media

```html
<!-- Link -->
<a href="https://google.com" target="_blank">Google</a>

<!-- Image -->
<img src="image.jpg" alt="Deskripsi" width="300">

<!-- Video -->
<video controls width="400">
    <source src="video.mp4" type="video/mp4">
</video>

<!-- Audio -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
</audio>
```

## 📝 Lists

```html
<!-- Unordered List -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

<!-- Ordered List -->
<ol type="A">
    <li>First</li>
    <li>Second</li>
</ol>

<!-- Description List -->
<dl>
    <dt>Term</dt>
    <dd>Definition</dd>
</dl>
```

## 📊 Tables

```html
<table>
    <caption>Judul Tabel</caption>
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="2">Footer</td>
        </tr>
    </tfoot>
</table>
```

## 📋 Forms

```html
<form action="/submit" method="POST">
    <!-- Text Input -->
    <input type="text" name="username" placeholder="Username" required>
    
    <!-- Password -->
    <input type="password" name="pwd">
    
    <!-- Email -->
    <input type="email" name="email">
    
    <!-- Number -->
    <input type="number" min="1" max="100">
    
    <!-- Radio -->
    <input type="radio" name="gender" value="male" id="male">
    <label for="male">Male</label>
    
    <!-- Checkbox -->
    <input type="checkbox" name="agree" id="agree">
    <label for="agree">I agree</label>
    
    <!-- Select -->
    <select name="city">
        <option value="jkt">Jakarta</option>
        <option value="bdg">Bandung</option>
    </select>
    
    <!-- Textarea -->
    <textarea name="message" rows="4"></textarea>
    
    <!-- Button -->
    <button type="submit">Submit</button>
</form>
```

## 🏗️ Semantic Elements

```html
<header>Header</header>
<nav>Navigation</nav>
<main>
    <article>Article content</article>
    <section>Section</section>
    <aside>Sidebar</aside>
</main>
<footer>Footer</footer>
```

## 🎯 Input Types Lengkap

| Type | Deskripsi |
|------|-----------|
| `text` | Teks biasa |
| `password` | Password (hidden) |
| `email` | Email validation |
| `number` | Angka |
| `tel` | Telepon |
| `url` | URL validation |
| `date` | Date picker |
| `time` | Time picker |
| `datetime-local` | Date & time |
| `color` | Color picker |
| `range` | Slider |
| `file` | File upload |
| `radio` | Single choice |
| `checkbox` | Multiple choice |
| `submit` | Submit button |
| `reset` | Reset form |
| `button` | Generic button |

## 🔧 Important Attributes

| Attribute | Deskripsi | Contoh |
|-----------|-----------|---------|
| `id` | Unique identifier | `id="header"` |
| `class` | Class name | `class="btn primary"` |
| `style` | Inline CSS | `style="color: red;"` |
| `title` | Tooltip text | `title="Info"` |
| `href` | Link destination | `href="page.html"` |
| `src` | Resource source | `src="image.jpg"` |
| `alt` | Alternative text | `alt="Logo"` |
| `target` | Link target | `target="_blank"` |
| `placeholder` | Input placeholder | `placeholder="Name"` |
| `required` | Required field | `required` |
| `readonly` | Read-only | `readonly` |
| `disabled` | Disabled | `disabled` |
