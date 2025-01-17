from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)

conn = mysql.connector.connect(
    host="localhost",
    user="username",
    password="password",
    database="car_sales"
)

@app.route('/add_car', methods=['POST'])
def add_car():
    data = request.get_json()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO cars (make, model, year, price) VALUES (%s, %s, %s, %s)",
                   (data['make'], data['model'], data['year'], data['price']))
    conn.commit()
    return jsonify({"status": "success", "id": cursor.lastrowid})

@app.route('/get_cars', methods=['GET'])
def get_cars():
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM cars")
    cars = cursor.fetchall()
    return jsonify(cars)

if __name__ == '__main__':
    app.run(debug=True)
