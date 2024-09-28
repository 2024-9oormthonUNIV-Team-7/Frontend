export interface TabProps {
  buttonTexts: string[];
  activeIndex?: number | null;
  onButtonClick: (index: number) => void; // 버튼 클릭 핸들러 추가
}
