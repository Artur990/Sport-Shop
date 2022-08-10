import React from "react";
import "./Run.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Run = ({ setIsOpenRun }) => {
  return (
    <div>
      <>
        {/* style={OVERLAY_STYLE} */}
        <div className="portal-main" />
        <div className="portal">
          <AiFillCloseCircle onClick={() => setIsOpenRun(false)} />

          <div>
            {" "}
            <h3>Zaczynamy więc od omówienia pierwszego, początkowego etapu</h3>.
            W jednym z wcześniejszych artykułów mówiłem, że marszobiegi będą
            idealną formą aktywności fizycznej dla osób wkraczających w świat
            biegania. Jest to dobra forma ruchu dla osób początkujących lub
            powracających do biegania po bardzo długiej przerwie. To forma
            aktywności polecana również dla osób z nadwagą. Marszobieg to
            połączenie marszu i biegu.
            <h4>
              Pierwszą częścią treningu powinien być marsz trwający 5 -7 minut
            </h4>{" "}
            , który pełni formę rozgrzewki. Niska intensywność pozwoli uruchomić
            procesy zachodzące w organizmie, takie jak zwiększenie przepływu
            krwi czy podniesienie temperatury mięśni i stawów. Skoro marszobieg
            rozpoczynamy od marszu, to później przychodzi czas na bieg, który
            mocniej pobudzi organizm do pracy i spalania kalorii. Gdy przez 300
            metrów maszerowaliśmy, odcinek biegowy może liczyć 100 metrów. Innym
            przykładem jest marsz na odcinku 400 metrów i bieg na dystansie 200.
            Długość odcinków marszu i odcinków biegu dobieramy pod aktualną
            kondycję fizyczną, samopoczucie i umiejętności. Na początku
            wystarczy marsz przez 300 metrów i spokojny 100 metrowy bieg.
            <h4>
              Przez pierwsze 2 miesiące marszobiegi powinny trwać około 20-30
              minut.
            </h4>
            Trenujemy przynajmniej 3 razy w tygodniu, gdyż taka częstotliwość
            zaowocuje stopniowym nabieraniem wprawy i będzie podstawą do rozwoju
            biegowej formy. Mój początkowy plan treningowy zakładał aktywność
            fizyczną właśnie 3 razy w tygodniu: w poniedziałki, środy i soboty.
            Ale taki plan nie oznaczał, że w pozostałe dni robiłem całkowitą
            przerwę od ruchu.
          </div>
        </div>
      </>
      ,
    </div>
  );
};

export default Run;
