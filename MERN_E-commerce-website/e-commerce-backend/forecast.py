# forecast.py
import pandas as pd
from fbprophet import Prophet
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    df = pd.DataFrame(data['sales_data'])  # sales_data: [{'ds': 'date', 'y': 'sales'}]
    
    # Preparing the Prophet model
    model = Prophet()
    model.fit(df)
    
    # Future dataframe for 2025
    future = model.make_future_dataframe(periods=365)
    forecast = model.predict(future)
    
    # Convert forecast to JSON and return it
    return jsonify(forecast[['ds', 'yhat']].tail(365).to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
