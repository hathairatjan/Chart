import {View, Text, Dimensions} from 'react-native';
import React, {Component} from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

let urls = 'https://hormcafe.000webhostapp.com/CPE451-REST-API/read.php';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datatodos: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch(urls)
      .then(response => response.json())
      // .then(data => console.log(data));
      .then(data =>
        this.setState({
          datatodos: data,
          isLoading: false,
        }),
      );
  }

  render() {
    console.log(this.state.datatodos);
    return (
      <View>
        <Text>Bezier Line Chart of Hathairat</Text>
        <BarChart
          data={{
            labels: this.state.datatodos.map(x => x.name),
            datasets: [
              {
                data: this.state.datatodos.map(x => x.weight),
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={350}
          yAxisSuffix=" kg."
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#FF00C7',
            backgroundGradientFrom: '#FF71E0',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    );
  }
}
export default App;
