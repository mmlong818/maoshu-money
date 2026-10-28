// SAKURA 主题的首页横幅：纯装饰性的品牌区块，不参与数据与复制流程。
import { Icon } from "./Icon";
import { L } from "../lib/i18n";
import { fs } from "./theme";

const DASH_COLORS = [
  "linear-gradient(90deg, #f2a9bb, #ee8fa5)",
  "linear-gradient(90deg, #f2cd9a, #eeb87f)",
  "rgba(255, 246, 242, 0.75)",
  "rgba(242, 169, 187, 0.45)",
];

export function Hero() {
  return (
    <div className="hero" aria-hidden="true">
      <img className="hero-art" src="/hero-mummy.png" alt="" draggable={false} />
      <div className="hero-shade" />
      <span className="hero-voice">
        <Icon name="dot.radiowaves.left.and.right" size={fs(11)} strokeWidth={2.4} />
        {L("有声")}
      </span>
      <div className="hero-body">
        <span className="hero-eyebrow">MONEY / 01 — UNCLE CAT</span>
        <span className="hero-title">{L("猫叔的钱")}<br />{L("去哪了？")}</span>
        <span className="hero-caption">EVERY TOKEN, ON RECORD<br />EVERY BILL, IN SIGHT</span>
        <span className="hero-dashes">
          {DASH_COLORS.map((bg, i) => (
            <i key={i} style={{ background: bg }} />
          ))}
        </span>
      </div>
      <div className="hero-foot">
        <span>{L("每笔 token · 温柔记账")}</span>
        <span className="hero-dots">
          {[0, 1, 2, 3].map((i) => (
            <i key={i} />
          ))}
        </span>
        <span className="hero-palette">CASH / BILLS / PAIN</span>
      </div>
    </div>
  );
}
