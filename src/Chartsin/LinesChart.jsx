import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar,Pie, PieChart } from 'recharts';
import {bar} from 'chart.js'
import './Lines.css'
import { UserData } from './Data';
const pdata = [
  {
    name: 'Python',
    student: 13,
    FeesPaid: 10
  },
  {
    name: 'Javascript',
    student: 15,
    FeesPaid: 12
  },
  {
    name: 'PHP',
    student: 15,
    FeesPaid: 10
  },
  {
    name: 'Java',
    student: 10,
    FeesPaid: 5
  },
  {
    name: 'C#',
    student: 9,
    FeesPaid: 4
  },
  {
    name: 'C++',
    student: 10,
    FeesPaid: 8
  },
];
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


function LinesChart() {
  return (
    <>
       <h1 className="chart-heading">Bar Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={UserData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" interval={'preserveStartEnd'} />
          <YAxis />
          <Tooltip  contentStyle={{ backgroundColor: 'skyblue' }}/>
          <Legend />
          <Bar dataKey="userGain" fill="#36AE7C" />
          <Bar dataKey="userLost" fill="#EB5353" />
        </BarChart>
      </ResponsiveContainer>
     
      <h1 className="chart-heading">Line Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={data} width={500} height={300} margin={{ top: 5, right: 300, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={'preserveStartEnd'}  />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: '#362706' }} />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#2FA4FF" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="pv" stroke="#00FFDD" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="amt" stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      <h1 className="chart-heading">Area Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          width={50}
          height={30}
          data={UserData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip  contentStyle={{ backgroundColor: 'yellowgreen' }}/>
          <Legend />
          <Area type="monotone" dataKey="userGain" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="userLost" stroke="#FFE162" fill="#FFE162" />
        </AreaChart>
      </ResponsiveContainer>
   
   
    </>
  );
}

export default LinesChart;