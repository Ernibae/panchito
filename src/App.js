import React, { Component} from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col} from 'react-flexbox-grid';
import AppBar from '@material-ui/core/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';
import './App.css';


const cities = [
  'Sevilla,es',
  'Barcelona,es',
  'Pontevedra,es',
  'Bilbao,es',
  'Almeria,es',
  'Badajoz,es',
  'Arrecife,es',
  'Ibiza,es',
];


class App extends Component {
  constructor(){
    super()
    this.state = {
      city: null
    };
  }

  handSelectionLocation = city => {
    this.setState({
      city:city
    });
    this.props.setCity(city);
  }
  render() {
    const {city} = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h2' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
              cities={cities} 
              onSelectedLocation={this.handSelectionLocation}></LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {
                  city && 
                  <ForecastExtended city={city}></ForecastExtended>
                  }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}


const mapDispatchToPops = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToPops)(App);
