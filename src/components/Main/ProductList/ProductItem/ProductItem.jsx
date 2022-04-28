import React, { Component } from 'react'
import './ProductItem.css'
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';

export class ProductItem extends Component {
  //rconst
  constructor(props) {
    super(props)
  
    this.state = {
       company:this.props.data.company || "Cat Cake SA"
    }
  }

  render() {
    //destructuring
    const {name,price,image} = this.props.data; 

    return (
      <section>
        <Card sx={{ width: 250, margin:1 }}>
          <CardMedia component="img" height="140" image={image}alt="cake"/>
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Precio:{price}€
          </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={this.props.remove}>Borrar</Button>
            <Button size="small">❤</Button>
          </CardActions>
        </Card>
        
      </section>
      // <div>
      //     <h4>Tarta de {name}</h4>
      //     <p>Precio:{price}€</p>
      //     <p>Company: {this.state.company}</p>
      //     <img className="cake" src={image} alt="tarta" /><br/>
      //     <button onClick={this.props.remove}>Borrar</button>
      // </div>
    )
  }
}

export default ProductItem