import React from "react";
import "./DoingSport.scss";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/toCalculate.jpg";
import img2 from "../../assets/images/tGym.jpg";
import img3 from "../../assets/images/toRun.jpg";
const DlaczegoWartoUprawiacSport = () => {
  return (
    <>
      <span className="sport-calculate">
        <span className="sport-calculate__photo">
          <img className="sport-calculate__photo-1" src={img1} alt="img1" />
        </span>
        <div className="sport-calculate__description">
          <h1>Kalkulator Kalori</h1>
          <p>
            {" "}
            Dzięki naszemu Kalkulatorowi sprawdzisz ile kalori zjadasz każdego
            dnia !
          </p>
          <p>
            Odpwiedż nasz kalkulator, przelicz kalorie i osiągnij swoją
            sylwetkę!
          </p>
          <Link to="/plantreningowy/dieta" className="sport-calculate__link">
            Kalkulator kalori
            <Link to="/plantreningowy/dieta" />
          </Link>
        </div>
      </span>
      <span className="sport-calculate">
        <div className="sport-calculate__description">
          <h1>Plan treningowy siłowni </h1>
          <p>Sprawdź nasze plany treningowe dla Początkujących</p>
          <p>
            Naszę plany są układane przez specjalistów sprawdź a zobaczysz
            piwersze efekty już w pierwszym miesiącu!
          </p>
          <Link to="/plantreningowy/silownia" className="sport-calculate__link">
            Plan na siłownie
          </Link>
        </div>
        <span className="sport-calculate__photo">
          <img className="sport-calculate__photo-2" src={img2} alt="img2" />
        </span>
      </span>
      <span className="sport-calculate">
        <span className="sport-calculate__photo">
          <img className="sport-calculate__photo-3" src={img3} alt="img1" />
        </span>
        <div className="sport-calculate__description">
          <h1>Plan biegania</h1>
          <p> Zacznij biegać z naszym planym treningowym</p>
          <p>
            Nasz plan treningwy przetestowało setki osób, sprawdź i się
            przekonaj
          </p>
          <Link to="/plantreningowy/dieta" className="sport-calculate__link">
            Plan biegania
            <Link to="/plantreningowy/dieta" />
          </Link>
        </div>
      </span>
      {/* <div className="title-pages1">
        Powody dla których warto uprawiać sport
      </div>
      <div className="container-main1">
        <div className="title1">Staniesz się konsekwentny</div>
        <p className="paragraph1">
          Ile to razy słyszałem, że osoby które przebiegły maraton są z całą
          pewnością tak zdeterminowane, że w biznesie są w stanie osiągnąć
          „niemal wszystko”. Przebiegłem maraton, przebiegłem ultramaraton w
          liczbie większej niż jeden i nie potwierdzam tej tezy! Absolutnie nie
          myślałbym o tym w tych kategoriach – sport to spor, a biznes to biznes
          ! Życie prywatne to też zresztą nie sport ! Pomyśl jednak o tym w ten
          sposób – jeśli jesteś na tyle zdeterminowany żeby trenować dajmy na to
          pięć razy w tygodniu to musi mieć to jednak pewne przełożenie na Twoje
          życie. Musi być jednak jakaś korelacja między tą nową umiejętnością,
          którą jest umieszczenie w swoim „grafiku” co najmniej pół godzinnego
          treningu a umiejętnością planowania także w innych obszarach życia. Co
          więcej, musi być też pewna korelacja między tym, że realizujesz plan
          treningowy, a tym że z innych swoich planów nie jesteś wytrącony z
          byle powodu, ani też nie rezygnujesz z nich bez naprawdę realnej
          przyczyny. Innymi słowy, finalnie jest tak, że dzięki konsekwencji w
          jednej dziedzinie życia uczysz się konsekwencji także na innych jego
          płaszczyznach. Rzecz jasna, nie ma tu przełożenia jeden do jeden, ale
          na pewno kierunek, który obierzesz będzie analogiczny a jedynie impet
          działań i jego skutki mogą być nieco różne.
        </p>
      </div>
      <div>
        <div className="title1">Nauczysz się walczyć do końca</div>
        <p className="paragraph1">
          Jeżeli nie uprawiałeś sportu to być może nie znasz tego uczucia, kiedy
          na ostatnich metrach, w ostatnich sekundach, czy też resztkami sił
          decydujesz się dać z siebie jeszcze więcej żeby wynik był dla Ciebie
          korzystny. Innymi słowy, potrafisz „docisnąć” żeby wygrać ! Nie wiem
          czy też tak masz, ale ja w życiu wcześniej często miewałem takie
          sytuacje, w których byłem na tyle przekonany, że już uprzednio
          zrobiłem wszystko co mogłem, że ostatnia prosta była po prostu ….
          Odpuszczona. A na ostatniej prostej przecież odpuścić najprościej, bo
          jeśli się nie uda to przecież jeszcze przed porażką sobie wszystko
          zracjonalizowaliśmy. Już wcześniej wyjaśniliśmy sobie, że wszystko co
          było do zrobienia zrobiliśmy już wcześniej więc skoro na końcu, kiedy
          sił ma się najmniej, nie wykrzesaliśmy z siebie wszystkiego to
          przecież nic się nie dzieje, bo to nie ma znaczenia. Czy faktycznie
          nie ma to znaczenia ? Czy realnie „ostatnia prosta” nie jest już
          momentem na dawanie z siebie wszystkiego ? Myślę, że najlepiej jeśli
          samemu się przekonasz, ale na logikę biorąc wydaje się, że jednak
          prawda jest nieco inna.
        </p>
      </div>
      <div>
        <div className="title1">Popraw swoją koncentrację</div>
        <p className="paragraph1">
          Ok ja mam to opanowane w przypadku biegów oraz yogi. Nie wiem czy tak
          działają wszystkie sporty. Niemniej, w przypadku tych dwóch,
          ewidentnie mam poczucie, że dzięki temu, że uprawiam sport mam więcej
          „wewnętrznej siły” do tego, aby skoncentrować się na tym co mam do
          zrobienia. Cóż, nie potrafię tego wytłumaczyć od strony medycznej, a z
          pewnością taki kontekst całej sytuacji jest tym podstawowym, ale
          regularnie uprawiając sport, koncentrując się na tym co mam do
          zrobienia w ramach treningu, „odcinając” nijako swoje myśli od innych
          spraw i dając im jako wyłączne wyzwanie pełne panowanie nad mięśniami
          zyskuję taki potencjał koncentracji, którego w innych sytuacjach nie
          spotykałem. Oczywiście, wcale nie jest łatwo przenieść ten poziom
          koncentracji w inny obszar swojego życia, ale jednak finalnie nawet
          jeśli wychodzi nam to nieco nieudolnie w innych niż sport
          płaszczyznach to jesteśmy i tak „do przodu”.
        </p>
      </div> */}
    </>
  );
};

export default DlaczegoWartoUprawiacSport;
