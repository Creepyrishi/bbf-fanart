from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/about-developer")
def about_developer():
    return render_template('about-dev.html')

if __name__ == "__main__":
    app.run()