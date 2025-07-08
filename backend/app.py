from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

@app.route('/match', methods=['POST'])
def match_neighborhoods():
    try:
        user_preferences = request.json
        print("User Preferences:", user_preferences)

        # Load JSON data
        with open(os.path.join('data', 'neighborhoods.json')) as f:
            neighborhoods = json.load(f)

        scored = []
        for n in neighborhoods:
            score = 0
            for key, weight in user_preferences.items():
                if key in n:
                    score += n[key] * weight
            scored.append({
                "name": n["name"],
                "score": score
            })

        # ✅ Sort all cities by score, even if score is 0
        top_3 = sorted(scored, key=lambda x: x["score"], reverse=True)[:3]

        # ✅ Return only city names
        return jsonify([{"name": city["name"]} for city in top_3])

    except Exception as e:
        print("Error:", e)
        return jsonify({ "error": str(e) }), 500

if __name__ == '__main__':
    app.run(debug=True)
