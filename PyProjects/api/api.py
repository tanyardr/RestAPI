import flask

app = flask.Flask(__name__)
app.config["DEBUG"] = True

name = ['Monja Coen', 'Fernando Pessoa', 'Ferreira Gular']
booksFrom = [1, 2, 3]
booksFrom[1] = ['Zen Para Distraidos', 'A monja e o Professor']

def listBooks():
    for i in booksFrom[1]:
        print(booksFrom(i))

@app.route('/', methods=['GET'])
def home():
    return "<h1>Distant Reading Archive</h1><p>This is a prototype API for distant reading.</p>"

@app.route('/authors/<name>')
def authors(name):
    return '<h1>Books %s</h1>' % listBooks  
  
app.run()