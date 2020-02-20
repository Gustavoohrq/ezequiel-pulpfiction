import React, { useEffect, useState} from 'react';
import './App.css';
import Typist from 'react-typist';



function App() {
  var [img, setImg] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setImg(true)
      }, 40000);
  }, [img])
  return (
    <div className="text">
      <Typist>
        <p> Há uma passagem que eu memorizei, que parece oportuna para esta situação: <strong>Ezequiel 25:17</strong>. </p>
        <Typist.Delay ms={100} />
        <p className="ezequiel">
          "O caminho do justo está cercado por todos os lados pelas iniquidades dos egoístas e pela tirania dos perversos. Bendito é aquele que, em nome da caridade e da boa vontade, pastoreia os fracos pelo vale das trevas, pois ele é verdadeiramente o protetor de seus irmãos e o salvador dos filhos perdidos. E Eu atacarei com grande vingança e raiva furiosa aqueles que tentam envenenar e destruir meus irmãos. E você saberá: meu nome é o Senhor quando minha vingança cair sobre ti!".
        </p>
        <Typist.Delay ms={100} />


      </Typist>
        {img ? <img src="https://pngarchive.com/public/uploads/preview/pulp-fiction-10015685761741phbgb6e4d.png" width="250" /> : null}
    </div>


  );
}

export default App;
