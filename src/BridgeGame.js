/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridges;
  #nowIndex = 0;

  constructor(bridges) {
    this.#bridges = bridges;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    const inputView = require('./InputView');
    inputView.readMoving(this.#bridges, 0);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

const bridgeMaker = require('./BridgeMaker');
const generator = require('./BridgeRandomNumberGenerator');
// const bridges = bridgeMaker.makeBridge(inputView.readBridgeSize(), generator.generate);
// const bridges = bridgeMaker.makeBridge(3, generator.generate);
// const bridgeGame = new BridgeGame(bridges);
// bridgeGame.move();


module.exports = BridgeGame;
