function PlayerCards(props) {
  return (
    <div class="modules-mediaPlayerSpacing">
      <figure class="modules-playerImg">
        <img id="module-playerOneImg" src="" alt="" />
      </figure>
      <aside class="modules-statBlockBorder">
        <h4 class="modules-playerOneName modules-teamColors"></h4>
        <ul class="modules-playerStatBox">
          <li class="modules-playerSingleStat">
            <div>
              <div class="modules-statMargin">
                <span class="modules-statCategory">PTS</span>
              </div>
              <div>
                <span class="modules-playerOnePPG modules-statNumber"></span>
              </div>
            </div>
          </li>
          <li class="modules-playerSingleStat">
            <div>
              <div class="modules-statMargin">
                <span class="modules-statCategory">REB</span>
              </div>
              <div>
                <span class="modules-playerOneREBPG modules-statNumber"></span>
              </div>
            </div>
          </li>
          <li class="modules-playerSingleStat">
            <div>
              <div class="modules-statMargin">
                <span class="modules-statCategory">AST</span>
              </div>
              <div>
                <span class="modules-playerOneASTPG modules-statNumber"></span>
              </div>
            </div>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default PlayerCards;
