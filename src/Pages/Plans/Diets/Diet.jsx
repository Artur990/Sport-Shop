import React, { useEffect, useState } from "react";
import { CartState } from "../../../context/Context";
import "./Diet.css";
import DietSingle from "./DietSingle";
import DietAdd from "./DietAdd";
import { allFoodCategories } from "../../../data/food";

const Dieta = () => {
  const { food } = CartState();
  // console.log(food.snacks);

  const [fitresCategories, setFiltersCategories] = useState(
    allFoodCategories.breakFast
  );

  const [total, setTotal] = useState();

  useEffect(() => {
    const totalCount = food.foodAdd.reduce(
      (acc, cur) => acc + Number(cur.kcal) * Number(cur.qty),
      0
    );
    setTotal(totalCount);
  }, [food.foodAdd]);

  const handleFoodType = (type) => {
    if (type === "breakfast") {
      setFiltersCategories(allFoodCategories.breakFast);
    }
    if (type === "dinner") {
      setFiltersCategories(allFoodCategories.dinner);
    }
    if (type === "lunch") {
      setFiltersCategories(allFoodCategories.lunch);
    }
    if (type === "snacks") {
      setFiltersCategories(allFoodCategories.snacks);
    }
  };
  return (
    <>
      <h1 className="title-dieta">
        Sprawdź ile kalorii zjadasz podczas dnia , dodają produkty w
        kalkulatorze
      </h1>

      <div className="main-dieta">
        <div className="products">
          <div className="btns">
            <button
              className="btnss"
              onClick={() => handleFoodType("breakfast")}
            >
              śniadaie
            </button>
            <button className="btnss" onClick={() => handleFoodType("dinner")}>
              Objad
            </button>
            <button className="btnss" onClick={() => handleFoodType("lunch")}>
              Kolacja
            </button>
            <button className="btnss" onClick={() => handleFoodType("snacks")}>
              Przekąski
            </button>
          </div>
          <div className="produkt">
            {fitresCategories.map((prod) => (
              <DietSingle key={prod.id} prod={prod} />
            ))}
          </div>
        </div>

        <div className="calculate-main">
          {food.foodAdd.map((prod) => (
            <DietAdd prod={prod} key={prod.id} />
          ))}
        </div>
        <div className="totals">
          <h2>Total Kalori {total}</h2>
          <h2>Ilość produktów {food.foodAdd.length}</h2>
        </div>
      </div>
      <div className="secend-main-dieta">
        <div className="dieta">
          <h2>Czym kierować się przy wyborze diety odchudzającej?</h2>
          <p>
            Dieta redukcyjna musi być odpowiednio dopasowana do naszego stylu
            życia. Nie każdy ma czas na tworzenie rozmaitych dań, które bazują
            na trudno dostępnych produktach. Co więcej, nie wszyscy są w stanie
            jeść 5 posiłków dziennie o stałych porach, a część diet tego wymaga.
            Dieta biurowa to sposób odżywiania, któremu powinny się przyjrzeć
            szczególnie zabiegane osoby, dla których posiłki to sprawa niższego
            rzędu. Dodatkowo musimy rozważyć, czy wraz z odchudzającą
            rozpoczynamy przygodę treningową - wówczas potrzebujemy zupełnie
            innego rozkładu makroskładników, niż osoba niećwicząca. Podstawową
            kwestią, którą należy wziąć pod uwagę, są także nasze indywidualne
            upodobania. Nie możemy zmuszać się do posiłków, dieta odchudzająca
            powinna być oparta o produkty, które lubimy i jemy je na co dzień,
            ponieważ dieta to nie kara. Co więcej, z diety powinny być
            wykluczone składniki, na które jesteśmy uczuleni. Wybrana przez nas
            dieta powinna uwzględniać również nasze choroby oraz nie kolidować z
            przyjmowanymi lekami. Przed wyborem diety na schudnięcie należy
            zrobić dokładny research, zapoznać się z zasadami wszystkich
            możliwych diet odchudzających i wybrać coś, co najbardziej
            przypadnie nam do gustu. Warto kierować się również opiniami innych
            osób, które miały okazję skorzystać z diety.
          </p>
        </div>
        <div className="dieta">
          <h2>
            Czy warto wybrać się do dietetyka aby zaplanować odpowiednią dietę?
          </h2>
          <p>
            Skorzystanie z porad dietetyka wiąże się oczywiście z opłatami,
            jednak w wielu przypadkach może to być znakomita decyzja. Warto
            postawić na pomoc profesjonalisty, jeśli nigdy nie mieliśmy do
            czynienia z odchudzaniem, planowaniem diet, ale także, gdy
            poprzednie próby nie dały pożądanych efektów. Dietetyk to osoba
            wykwalifikowana w kontekście diet, potrafi ocenić jaki sposób
            odżywania sprawdzi się w przypadku konkretnej osoby. Dopasuje
            wszystko idealnie pod nasze potrzeby, uwzględniając również nasz
            stan zdrowia, a także odpowie na nurtujące nas pytania. Co więcej,
            mamy również możliwość uzyskania diety darmowej, którą możemy
            wygenerować w Internecie. Dieta NFZ to program Narodowego Funduszu
            Zdrowia, który zakłada przygotowanie dla zainteresowanego jadłospisu
            na 14 dni, opartego na zasadach diety prozdrowotnej. Dieta DASH ma
            wspierać przede wszystkim układ krwionośny i uczyć zdrowych nawyków
            żywieniowych.
          </p>
        </div>
        <div className="dieta">
          <h2>Najpopularniejsze diety odchudzające</h2>
          <p>
            Bardzo powszechnie stosowaną dietą jest dieta śródziemnomorska,
            która swoją drogą jest niezwykle zdrowa. Opiera się na stosowaniu
            nieprzetworzonych produktów, z uwzględnieniem jedzenia licznych
            warzyw i owoców, czerwonego mięsa, a także ryb i owoców morza. Dieta
            tego rodzaju wymaga również bardzo dużego skupienia na posiłku, jego
            celebracji, co przekłada się na większe poczucie sytości. Jest
            szczególnie polecana dla osób chorujących na cukrzycę. Dieta 2000
            kcal stała się bardzo popularna odkąd lekarze, dietetycy i trenerzy
            zaczęli skutecznie uświadamiać ludzi, że aby schudnąć i tak należy
            jeść. 2000 kalorii to dość optymalna liczba, sprawdzi się w wielu
            przypadkach, jednak w szczególności dla osób trenujących, może to
            być za mało. Dokładne wyliczenie kaloryki powinno opierać się na
            wyniku PPM (podstawowa przemiana materii) oraz CPM (całkowita
            przemiana materii). W diecie o określonej liczbie kalorii nie
            przykładamy tak dużej wagi do spożywania konkretnych produktów, mamy
            po prostu zmieścić się w danej kaloryczności i oczywiście starać się
            wybierać zdrowe składniki.
          </p>
        </div>
        <div className="dieta">
          <h2>Diety prozdrowotne</h2>
          <p>
            Dieta odchudzająca, której zadaniem jest przeciwdziałanie chorobom
            cywilizacyjnym to dieta paleo. Jej główna dewiza to jedzenie
            produktów, które kiedyś człowiek był po prostu w stanie upolować. Są
            to produkty nieprzetworzone, zazwyczaj bogate w duże ilości białka,
            ponieważ kluczowym produktem jest mięso. Przy odpowiednim rozeznaniu
            i rozplanowaniu, dostarczymy swojemu organizmowi nie tylko białka,
            ale również węglowodanów z owoców, czy też tłuszczów z jaj, olejów
            nierafinowanych oraz owoców morza. Dość nowym rozwiązaniem jest
            przypominająca dietę odchudzającą, choć wcale taka nie jest - dieta
            FODMAP. Ten sposób odżywiania to kontrowersyjny temat, ponieważ może
            przynieść wiele dobrego, ale również wyrządzić nam szkodę. Zakłada
            ona ograniczenie monosacharydów, tak aby zmniejszyć dolegliwości
            bólowe spowodowane zespołem jelita drażliwego czy SIBO. Warto ją
            stosować pod nadzorem profesjonalisty, ponieważ może prowadzić do
            niedoborów.
          </p>
        </div>
      </div>
    </>
  );
};

export default Dieta;

// useEffect(() => {
//     getPopular();
//   }, []);
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "ee11faf41cmsh4e8a249abd4b37ap1c8561jsn247ed39cf3ad",
//       "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//     },
//   };
//   const key = "ee11faf41cmsh4e8a249abd4b37ap1c8561jsn247ed39cf3ad";
//   const getPopular = async () => {
//     const api = await fetch(
//       `https://api.spoonacular.com/recipes/random   ?apiKey=400f15a8be104a84aa27874e6c6e39f4`
//     );

//     const data = await api.json();
//     setFood(data);
//     console.log(data);
//   };

{
  /* Dieta
        {food.results.map((data1) => {
          return (
            <div key={data1.id}>
              <h2>{data1.title}</h2>
              <img src={data1.image} alt={data1.id}></img>
              <div>Kalorie: {data1.calorie}</div>
            </div>
          );
        })} */
}

{
  /* <div className="products">
<h1 className="products-title">Produkty</h1>
<h2>Sniadania</h2>
<select name="lista" multiple="multiple" size="4">
  <option>Kanapka</option>
  <option>baton</option>
  <option>mrozona kawa z lodami</option>
  <option>kawa z ciastkiem</option>
  <option>jejecznica z boczkime</option>
  <option>owsianka</option>
  <option>warzywa</option>
  <option>sok pomarańczowy</option>
  <option>gotowana kiełbada</option>
</select>
<h2>obiad</h2>
<select name="lista" multiple="multiple" size="4">
  <option>chabowy po staropolsku</option>
  <option>burger</option>
  <option>pieczony kurczak z ziemiakami</option>
  <option>karkówka</option>
  <option>boritto</option>
  <option>kebab</option>
  <option>pizza</option>
  <option>sushi</option>
  <option>gotowana kiełbada</option>
</select>
<h2>kolacja</h2>
<select name="lista" multiple="multiple" size="4">
  <option>chabowy po staropolsku</option>
  <option>burger</option>
  <option>pieczony kurczak z ziemiakami</option>
  <option>karkówka</option>
  <option>boritto</option>
  <option>kebab</option>
  <option>pizza</option>
  <option>sushi</option>
  <option>gotowana kiełbada</option>
</select>
<h2>przekąski</h2>
<select name="lista" multiple="multiple" size="4">
  <option>lody</option>
  <option>baton</option>
  <option>chipsy</option>
  <option>orzeczki</option>
  <option>piwo</option>
  <option>drink</option>
  <option>słodka lemoniada</option>
  <option>czekolada</option>
  <option>Pączek</option>
</select>
</div> */
}
