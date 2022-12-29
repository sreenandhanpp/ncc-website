import React from "react";

function Motto() {
  return (
    <div>
      <div className='container motto p-5'>
        <div className='row'>
          <div class='col col-md-12'>
            <div class='card'>
              <div class='card-body'>
                <blockquote class='blockquote blockquote-custom bg-white px-3 pt-4'>
                  <div class='blockquote-custom-icon bg-info shadow-1-strong'>
                    <i class='fa fa-quote-left text-white'></i>
                  </div>
                  <p class='mb-0 mt-2 motto-p'>
                    "The Aims of the NCC laid out in 1988 have stood the test of
                    time and continue to meet the requirements expected of it in
                    the current socio–economic scenario of the country. The NCC
                    aims at developing character, comradeship, discipline, a
                    secular outlook, the spirit "
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Motto;
