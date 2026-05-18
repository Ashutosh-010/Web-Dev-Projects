from pathlib import Path
p = Path(__file__).parent / "index.html"
text = p.read_text(encoding="utf-8")
bad = "<" + "/" + "m" + "o" + "t" + "i" + "o" + "n" + "d" + "i" + "v" + ">"
good = "<" + "/" + "d" + "i" + "v" + ">"
text = text.replace(bad, good)
p.write_text(text, encoding="utf-8")
print("ok")
