# Data Model

## 핵심 철학
여행 앱은 단순 일정표가 아니라 **계획, 변경, 실제 기록이 함께 남는 운영 아카이브**다.

```text
trip
 ├─ meta
 ├─ travelers
 ├─ flights
 ├─ hotel
 ├─ days[]
 │   ├─ originalPlan[]
 │   ├─ revisions[]
 │   ├─ currentPlan[]
 │   └─ actualRecord[]
 ├─ bookings[]
 ├─ shopping[]
 ├─ food[]
 ├─ expenses[]
 └─ tips[]
```

### originalPlan
최초 여행계획의 스냅샷. 실제 일정 업데이트 시에도 변경하지 않는다.

### revisions
`changedAt`, `reason`, `summary`를 누적해 왜 일정이 바뀌었는지 보존한다.

### currentPlan
현 시점에 일행이 따라야 할 운영안. 여행 중 가장 자주 바뀌는 레이어다.

### actualRecord
실제 출발시각, 방문, 취소, 식사, 이동 등 현장 결과를 기록한다.
