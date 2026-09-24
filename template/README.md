# Family Trip Starter Template

`assets/js/data.js`를 수정해 새 여행을 시작합니다. UI/렌더링은 `app.js`, 스타일은 `styles.css`에 분리되어 있습니다.

## 가장 중요한 데이터 원칙
```text
Original Plan → Revision History → Current Plan → Actual Record
```

- `originalPlan`: 최초 계획. 실제 일정이 바뀌어도 삭제/덮어쓰기 금지
- `revisions`: 변경 시각, 이유, 변경 요약을 누적
- `currentPlan`: 지금 실제로 운영하려는 일정
- `actualRecord`: 현장에서 실제로 진행된 내용

## 새 여행 시작 순서
1. `meta`에 여행지/기간/인원 입력
2. `days[].originalPlan` 작성
3. 운영 중 변경은 `revisions`와 `currentPlan`만 수정
4. 실제 진행 후 `actualRecord` 누적
5. 예약/쇼핑/먹거리/비용/팁 보강
