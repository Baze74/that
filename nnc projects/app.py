from flask import Flask, jsonify, render_template

app = Flask(__name__)

posts = [
    {'title': 'Plot 1', 'content': 'This is the content of Plot 1.'},
    {'title': 'Plot 2', 'content': 'This is the content of Plot 2.'},
    {'title': 'Plot 3', 'content': 'This is the content of Plot 3.'}
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/posts')
def get_posts():
    return jsonify(posts)

if __name__ == '__main__':
    app.run(debug=True)
