import '../css/Currrency.css'
import { CiPaperplane } from "react-icons/ci";
import { useState } from 'react';
import axios from 'axios';

let BASE_URL = 'https://api.freecurrencyapi.com/v1/latest';
let API_KEY = 'fca_live_Itg9maDzvfeVBN5RRkJ0KxXt6v19TzGkvOajzXAE';

function Currency() {
	const [amount, setAmount] = useState();
	const [fromCurrency, setFromCurrency] = useState('USD');
	const [toCurrency, setToCurrency] = useState('TRY');
	const [result, setResult] = useState();

	const exchange = async () => {
		const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
		const result = (response.data.data[toCurrency] * amount).toFixed(2);
		setResult(result)
	}

	return (
		<div className='currency-div'>
			<div style={{ fontFamily: 'arial', backgroundColor: 'blueviolet', width: '100%', textAlign: 'center' }}>
				<h3 style={{ color: 'white' }}>DÖVİZ KURU UYGULAMASI</h3>
			</div>
			<div style={{ marginTop: '50px' }}>
				<input value={amount}
					onChange={(e) => setAmount(e.target.value)}
					type='number' className='amount' />
				<select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
					<option>USD</option>
					<option>TRY</option>
					<option>EUR</option>
					<option>GBP</option>
					<option>RUB</option>
					<option>SEK</option>
					<option>CAD</option>
					<option>CNY</option>
					<option>JPY</option>
				</select>

				<CiPaperplane style={{ fontSize: '25px', color: 'red', marginRight: '10px', marginLeft: '10px' }} />

				<select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
					<option>TRY</option>
					<option>RUB</option>
					<option>EUR</option>
					<option>CAD</option>
					<option>USD</option>
					<option>CNY</option>
					<option>SEK</option>
					<option>JPY</option>
					<option>GBP</option>
				</select>

				<input value={result} onChange={(e) => setResult(e.target.value)} type='number' className='result' />

			</div>
			<div>
				<button onClick={exchange} className='exchange-button'>Çevir</button>
			</div>

		</div>
	)
}

export default Currency
