import './GnbInfo.css';

export default function GnbInfo({ gnbState = [], isStateLoading }) {
  let product, gnbStatus, dlSpeed, ulSpeed;

  if (gnbState.length !== 0) {
    const [gnbStateObj] = gnbState;
    ({
      product,
      gnbStatus,
      connectionQuality: { dlSpeed, ulSpeed },
    } = gnbStateObj);
  }

  return (
    <div className="generalGnb">
      <div className="liveIndicator">LIVE</div>

      {isStateLoading && (
        <>
          <div>
            <p className="labelProduct">
              Product:{' '}
              <span className="dataProduct loadingData">loading ...</span>
            </p>
          </div>
          <div>
            <p className="labelStatus">
              gnbStatus:{' '}
              <span className="dataStatus loadingData">loading ...</span>
            </p>
          </div>
          <div>
            <p className="labelDlSpeed">
              dlSpeed:{' '}
              <span className="dataDlSpeed loadingData">loading ...</span>
            </p>
          </div>
          <div>
            <p className="labelUlSpeend">
              ulSpeed:{' '}
              <span className="dataUlSpeed loadingData">loading ...</span>
            </p>
          </div>
        </>
      )}

      {!isStateLoading && gnbState.length !== 0 && (
        <>
          <div>
            <p className="labelProduct">
              Product: <span className="dataProduct">{product}</span>
            </p>
          </div>
          <div>
            <p className="labelStatus">
              gnbStatus:{' '}
              <span className={`dataStatus ${gnbStatus}`}>{gnbStatus}</span>
            </p>
          </div>
          <div>
            <p className="labelDlSpeed">
              dlSpeed: <span className="dataDlSpeed">{dlSpeed}</span>
            </p>
          </div>
          <div>
            <p className="labelUlSpeend">
              ulSpeed: <span className="dataUlSpeed">{ulSpeed}</span>
            </p>
          </div>
        </>
      )}

      {!isStateLoading && gnbState.length === 0 && (
        <>
          <div>
            <p className="labelProduct">
              Product:{' '}
              <span className="dataProduct notAvailable">not available</span>
            </p>
          </div>
          <div>
            <p className="labelStatus">
              gnbStatus:{' '}
              <span className="dataStatus notAvailable">not available</span>
            </p>
          </div>
          <div>
            <p className="labelDlSpeed">
              dlSpeed:{' '}
              <span className="dataDlSpeed notAvailable">not available</span>
            </p>
          </div>
          <div>
            <p className="labelUlSpeend">
              ulSpeed:{' '}
              <span className="dataUlSpeed notAvailable">not available</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
