# KEYLOGGER FOR SECURITY RESEARCH

A small, beginner-friendly Python and Flask project that demonstrates keystroke logging safely. Keystrokes are monitored only in the dedicated input field after you select **Start**. The browser displays the keys in the page; it does not capture system-wide input, save it, or send it anywhere. Do not enter passwords or sensitive information.

**Requirements:** Python 3.9 or newer and pip.

**Installation:** Clone the repository and install its dependency:

```bash
git clone https://github.com/sonu5204397-bot/KEYLOGGER-FOR-SECURITY-RESEARCH.git
cd KEYLOGGER-FOR-SECURITY-RESEARCH
python3 -m venv .venv
```

Activate the virtual environment:

```bash
# macOS/Linux
source .venv/bin/activate
```

```powershell
# Windows PowerShell
.\.venv\Scripts\Activate.ps1
```

Install Flask:

```bash
python -m pip install -r requirements.txt
```

**Run:** Start the local Flask server and open the displayed local address:

```bash
python app.py
```

Visit [http://127.0.0.1:5000](http://127.0.0.1:5000).

**Usage:** Select **Start**, type sample text in the dedicated demo input, and observe each key in the output area. Select **Stop** to pause the demonstration. The input and output remain only in the current page session.

**Upload:** Use a separate clone of the destination repository so you do not push the unrelated local repository history. Copy only this project's files into the clone, review any same-name files before replacing them (including the existing README), then run:

```bash
git clone https://github.com/sonu5204397-bot/KEYLOGGER-FOR-SECURITY-RESEARCH.git
cd KEYLOGGER-FOR-SECURITY-RESEARCH
git switch -c add-safe-keystroke-demo
# Copy app.py, requirements.txt, README.md, static/, templates/, and tests/ here.
git status --short
git add README.md app.py requirements.txt static/script.js static/style.css templates/index.html tests/test_app.py
git diff --cached --check
git commit -m "Add safe keystroke research demo"
git push -u origin add-safe-keystroke-demo
```

**Test:** Run the app tests with Python's built-in test runner:

```bash
python -m unittest discover -s tests
```

**Project files:**

```text
.
├── app.py
├── requirements.txt
├── README.md
├── static/
│   ├── script.js
│   └── style.css
├── templates/
│   └── index.html
└── tests/
    └── test_app.py
```
