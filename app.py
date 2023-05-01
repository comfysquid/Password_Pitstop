from flask import Flask, request, jsonify
from flask_cors import CORS
import secrets

app = Flask(__name__, template_folder='templates')
CORS(app, origins=['http://localhost:3000'])


def get_character_sets():
    lowercase = 'abcdefghijklmnopqrstuvwxyz'
    uppercase = lowercase.upper()
    numbers = '0123456789'
    symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?'
    return lowercase, uppercase, numbers, symbols


def generate_password(length=12):
    lowercase, uppercase, numbers, symbols = get_character_sets()
    all_chars = lowercase + uppercase + numbers + symbols
    password = ''.join(secrets.choice(all_chars) for _ in range(length))
    return password


def test_password(password):
    lowercase, uppercase, numbers, symbols = get_character_sets()
    has_lower = any(char in lowercase for char in password)
    has_upper = any(char in uppercase for char in password)
    has_number = any(char in numbers for char in password)
    has_special = any(char in symbols for char in password)

    if not has_lower:
        raise ValueError("Password does not contain a lowercase character")
    elif not has_upper:
        raise ValueError("Password does not contain an uppercase character")
    elif not has_number:
        raise ValueError("Password does not contain a number")
    elif not has_special:
        raise ValueError("Password does not contain a special character")
    elif not 18 > len(password) > 8:
        raise ValueError("Password must be between 8 and 18 characters")
    else:
        return True


@app.route('/generate', methods=['POST'])
def generate():
    length = int(request.json['length'])
    password = generate_password(length=length)
    return jsonify({'password': password})


@app.route('/test', methods=['POST'])
def test():
    password = request.json['password']
    try:
        test_password(password)
        return jsonify({'message': 'Password is valid!'})
    except ValueError as e:
        return jsonify({'error': str(e)}), 400
