import React from "react";
import { Link } from "react-router-dom";
import "./Gym.scss";
import img1 from "../../../assets/images/gym-workout1.jpg";
import img2 from "../../../assets/images/gym-workout2";
import img3 from "../../../assets/images/silowniaplan3.png";
const Silownia = () => {
  return (
    <div className="main-gym">
      <div className="plans-gym__sections">
        <h1 className="plans-gym__title">
          SIŁOWNIA - PLAN TRENINGOWY DLA POCZĄTKUJĄCYCH
        </h1>
        <h3>
          Plan treningowy dla początkujących powinien być dopasowany do celu i
          preferencji ćwiczącego. Inaczej wyglądają ćwiczenia na redukcję tkanki
          tłuszczowej, a inaczej na wymodelowanie sylwetki lub przyspieszanie
          wzrostu masy mięśniowej.
        </h3>
        <img className="plans-gym__title-img" src={img1} alt="img1" />
      </div>
      <div className="plans-gym__sections">
        <h2>Co powinien zawierać plan treningowy na siłownię?</h2>
        <h3>Plan treningowy powinien wyznaczać:</h3>
        <ul className="plans-gym__list">
          <li>
            w jaki sposób ma przebiegać rozgrzewka przed treningiem siłowym,
          </li>
          <li>sugerować ćwiczenia w treningu głównym,</li>
          <li>liczbę powtórzeń i serii wykonywanych ćwiczeń,</li>
          <li>obciążenia treningowe,</li>
          <li>długość przerw</li>
          <li>tempo ruchu.</li>
        </ul>
      </div>
      <div className="plans-gym__sections">
        <h3>
          {" "}
          Osoby, które rozpoczynają treningi na siłowni, powinny ćwiczyć z
          maksymalną dokładnością. Najlepiej, aby sposób wykonywania
          poszczególnych ćwiczeń został na początku zaprezentowany przez
          doświadczonego trenera. Właściwa technika wpływa na efektywność
          treningów i zmniejsza ryzyko kontuzji i urazów. Dobrą praktyką jest
          prowadzenie notesu treningowego, w którym znajdą się podstawowe
          informacje na temat treningów – wykorzystane obciążenie oraz liczba
          serii i powtórzeń danego ćwiczenia.
        </h3>
        <img src={img2} alt="img2" />
      </div>

      <div className="plans-gym__sections">
        <h2>Od czego zacząć, czyli początki na siłowni</h2>
        <h3>
          Planując regularne wizyty w sali ćwiczeń, trzeba dać organizmowi czas
          na zaadaptowanie się do nowych warunków. Ciało musi przywyknąć do
          wysiłku, a mięśnie, stawy i więzadła muszą mieć czas, aby się
          uodpornić. Najlepsze ćwiczenia dla początkujących to, np.:
        </h3>
        <ul>
          <li>przysiady – 5 serii po 20 powtórzeń,</li>
          <li>przysiady do skrzyni – 3-5 serii po 6-12 powtórzeń,</li>
          <li>pompki – 4-6 serii po 5 powtórzeń,</li>
          <li>
            unoszenie hantli w przód – 4 serie po 20 powtórzeń na każdą rękę,
          </li>
          <li>
            unoszenie sztangielek bokiem w górę – 4 serie po 15 powtórzeń,
          </li>
          <li>
            unoszenie sztangielek bokiem w górę – 4 serie po 15 powtórzeń,
          </li>
        </ul>
        <img src={img3} alt="img3" />
        {/* <div>
            Piramida (progresja ciężaru i regresja ilości
            powtórzeń):(20,15,12,8,4,2,1) 4×10 (80% max. wyciśniętego ciężaru)
          </div> */}
      </div>

      <div className="plans-gym__sections">
        <h2>Przykładowy plan treningowy</h2>
        <h3>
          Siłowy trening dla początkujących może być też wykorzystany jako
          uzupełnienie do innych treningów. Ćwiczenia angażują wszystkie grupy
          mięśniowe i mogą być wykonywane 3-4 razy w tygodniu. Ciężar do ćwiczeń
          należy dopasować do własnych możliwości. Przerwy w treningu powinny
          być dostosowane do celu treningowego.
        </h3>
        <h4>
          Osoby, które planują rozbudowę masy mięśniowej – do 2 minut pomiędzy
          ćwiczeniami.
        </h4>
        <h4>
          Osoby, które chcą zredukować tkankę tłuszczową – do 1 minuty pomiędzy
          ćwiczeniami.
        </h4>
        <ul>
          <li>
            Klatka piersiowa – wyciskanie hantli w pozycji leżącej na ławce
            poziomej, 3 serie po 8-12 powtórzeń.
          </li>
          <li>
            Mięśnie pleców – przyciąganie drążka wyciągu górnego, 3 serie po
            8-12 powtórzeń.
          </li>
          <li>Nogi – przysiady, 3 serie po 8-12 powtórzeń.</li>
          <li>
            Barki – wyciskanie sztangi siedząc, 2 serie po 8-12 powtórzeń.
          </li>
          <li>
            Biceps – uginanie ramion z hantlami stojąc, 2 serie po 8-12
            powtórzeń.
          </li>
          <li>
            Triceps – pompki w wąskim rozstawie rąk, 2 serie po 8-12 powtórzeń.
          </li>
          <li>
            Brzuch – unoszenie złączonych, wyprostowanych nóg leżąc, 2 serie po
            8-12 powtórzeń.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Silownia;
