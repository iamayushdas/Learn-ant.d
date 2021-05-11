import './App.css';
import { DatePicker, Button, version, message, Alert } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';

function App() {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  }
  return (
    <div className="App">
      <h1>antd version: {version}</h1>
      <DatePicker onChange={handleChange} />
      <div style={{marginTop: 16}} >
        selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
        <Alert message="Selected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} />
      </div>
      <Button type="primary" style={{ marginLeft: 8 }}>Primary Button</Button>
    </div>
  );
}

export default App;
