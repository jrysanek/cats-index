const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/cats', (req, res) => {
  res.json(cats)
})

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
})

const cats =
  [
    {
      id: "1",
      type: "Perisan",
      imgURL: "https://images.unsplash.com/photo-1591429939960-b7d5add10b5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1533&q=80",
      lifeSpan: "10 - 17 years",
      origin: "Iran"
    },
    {
      id: "2",
      type: "Maine Coon",
      imgURL: "https://images.unsplash.com/photo-1564605503879-eb94cf4c02e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      lifeSpan: "13 - 14 years",
      origin: "Maine, USA"
    },
    {
      id: "3",
      type: "Bengal",
      imgURL: "https://images.unsplash.com/photo-1598463166228-c0f90d180918?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80",
      lifeSpan: "9 - 15 years",
      origin: "USA and India"
    },
    {
      id: "4",
      type: "Scottish Fold",
      imgURL: "https://images.unsplash.com/photo-1600406717218-bb884848984f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
      lifeSpan: "15 years",
      origin: "United Kingdom"
    },
    {
      id: "5",
      type: "Himalayan",
      imgURL: "https://images.unsplash.com/photo-1586951998354-5c23b33cd612?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      lifeSpan: "9 - 15 years",
      origin: "Iran, USA and Thailand"
    }

  ]