SELECT 
  JSON_VALUE(data, '$.name') as name,

FROM roit-rule-engine.realtime.HomBusinessRule_VW, UNNEST(JSON_EXTRACT_ARRAY(data, '$.application.combinationClients')) as params
WHERE JSON_VALUE(params, "$.id") LIKE '%46739d10f5b88176c3e9d605cf55fc2e%'
LIMIT 2000
