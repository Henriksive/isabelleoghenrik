import "./App.css";

function App() {
  return (
    <>
      <div className="frame">
        <h2>Vi gifter oss</h2>
      </div>
      <div className="frame">
        <h2>Praktisk informasjon</h2>
        <div className="subFrame">
          <h3>Kjøreplan</h3>
        </div>
        <div className="subFrame">
          <h3>Overnatting</h3>
          <h4>Leie hus</h4>
          <p>
            Det er plenty av utleiehus og -leiligheter i Isfjorden!
            <br />
            <a href="https://www.romsdallodge.com/lodge/vaare-hus">
              Romsdal Lodge
            </a>
            <br />
            <a href="https://www.airbnb.no/rooms/4240538?location=Isfjorden&search_mode=regular_search&adults=1&check_in=2025-03-01&check_out=2025-03-06&children=0&infants=0&pets=0&source_impression_id=p3_1740313885_P3coDlbavpyb5_5K&previous_page_section_name=1001&federated_search_id=72cb00ae-5d94-409f-a4cd-7b3053c34492">
              'Øyvind huset'
            </a>
            <br />
            <a href="https://www.airbnb.no/s/Isfjorden/homes?refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2025-03-01&monthly_length=3&monthly_end_date=2025-06-01&price_filter_input_type=0&channel=EXPLORE&place_id=ChIJ00kSKlkKFEYRuc-yeJGO91I&acp_id=cf49dba9-b67d-4a17-b86f-066c42d9c579&date_picker_type=calendar&source=structured_search_input_header&search_type=user_map_move&query=Isfjorden&search_mode=regular_search&price_filter_num_nights=5&ne_lat=62.59292611424316&ne_lng=7.834470719110499&sw_lat=62.56779621916538&sw_lng=7.792287239204541&zoom=13.580386234185271&zoom_level=13.580386234185271&search_by_map=true&room_types%5B%5D=Entire%20home%2Fapt&selected_filter_order%5B%5D=room_types%3AEntire%20home%2Fapt&update_selected_filters=false">
              Diverse AirBnB i Isfjorden
            </a>
          </p>
          <h4>Hotell</h4>
          <p>
            Åndalsnes har sitt helt egne Grand Hotell. I tillegg er det Frichs
            ekspresshotell som ligger på kjøpesenteret.
            <br />
            <a href="https://www.booking.com/hotel/no/grand-bellevue.no.html?aid=1288378&label=metagha-link-MRNO-hotel-302763_dev-desktop_los-1_bw-7_dow-Tuesday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-21411124319_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20250107_ppt-Co_lp-2578_r-16846583365757144399&sid=5a50fd4ef1b9222bc4565da8bd5eb2dd&all_sr_blocks=30276304_201687626_2_1_0_376383&checkin=2025-01-07&checkout=2025-01-08&dest_id=-251206&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=30276304_201687626_2_1_0_376383&hpos=1&matching_block_id=30276304_201687626_2_1_0_376383&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=30276304_201687626_2_1_0_376383_145860&srepoch=1735664547&srpvid=47ef77d0d9a108c3&type=total&ucfs=1&">
              Grand Hotell Bellevue
            </a>
            <br />
            <a href="https://www.booking.com/hotel/no/geist.no.html?aid=1288378&label=metagha-link-MRNO-hotel-4936020_dev-desktop_los-1_bw-56_dow-Sunday_defdate-0_room-0_gstadt-2_rateid-0_aud-0_gacid-21411124319_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20250420_ppt-_lp-2578_r-16986873903886797023&sid=5a50fd4ef1b9222bc4565da8bd5eb2dd&all_sr_blocks=493602002_218092782_2_0_0&checkin=2025-04-20&checkout=2025-04-21&dest_id=-251206&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=493602002_218092782_2_0_0&hpos=1&matching_block_id=493602002_218092782_2_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=493602002_218092782_2_0_0__152600&srepoch=1740314406&srpvid=53ad5910a9970290&type=total&ucfs=1&">
              Frichs hotell
            </a>
          </p>
          <h4>Camping/hytter</h4>
          <p>
            Det er dessuten flere gode campingplasser med campinghytter og
            hytteutleie i området.
            <br />
            <a href="https://www.booking.com/hotel/no/grand-bellevue.no.html?aid=1288378&label=metagha-link-MRNO-hotel-302763_dev-desktop_los-1_bw-7_dow-Tuesday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-21411124319_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20250107_ppt-Co_lp-2578_r-16846583365757144399&sid=5a50fd4ef1b9222bc4565da8bd5eb2dd&all_sr_blocks=30276304_201687626_2_1_0_376383&checkin=2025-01-07&checkout=2025-01-08&dest_id=-251206&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=30276304_201687626_2_1_0_376383&hpos=1&matching_block_id=30276304_201687626_2_1_0_376383&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=30276304_201687626_2_1_0_376383_145860&srepoch=1735664547&srpvid=47ef77d0d9a108c3&type=total&ucfs=1&">
              Åndalsnes hytteutleie
            </a>
            <br />
            <a href="https://www.visitsetnes.com/">Setnes Feriesenter</a>
            <br />
            <a href="https://www.andalsnes-camping.net/">Åndalsnes Camping</a>
            <br />
            <a href="https://korsbakkencamp.wixsite.com/korsbakkencamping">
              Korsbakken Camping
            </a>
          </p>
        </div>
        <div className="subFrame">
          <h3>Transportmuligheter</h3>
          <p>
            Det er flere gode reisemuligheter til Isfjorden/Åndalsnes. Det er
            imidlertid lite kollektivtilbud innad i kommunen, så dersom man ikke
            kommer i egen bil kan det være lurt å vite at det er mulighet for
            intern transport ved å sitte på i andre biler. Ta kontakt med oss
            dersom du er usikker!
          </p>
          <p>
            <h4>Bil</h4>
            <p>Det tar ca 5,5 timer å kjøre til Isfjorden fra Oslo</p>
            <h4>Tog</h4>
            <p>
              Det går tog fra Dombås til Åndalsnes som korresponderer med
              Trondhjemsbanen.
            </p>
            <h4>Fly</h4>
            <p>
              Nærmeste flyplass er Molde (1 time unna). Ankommer man hit kan det
              være lurt å avklare med oss på forhånd, så ordner vi med henting.
              Det er også mulig å fly til Ålesund og ta buss fra
              Ålesund-Isfjorden
            </p>
          </p>
        </div>
        <div className="subFrame">
          <h3>Kleskode</h3>
        </div>
      </div>
      <div className="frame">
        <h2>Ønskeliste</h2>
      </div>
    </>
  );
}

export default App;
