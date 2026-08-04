/* 自動生成ファイル。編集しないでください。正本は cycle.json です。 */
window.REPORT_DATA = {
  "schema_version": 1,
  "cycle_id": "cycle-0005",
  "generated_at": "2026-08-05T07:19:17+09:00",
  "title": "test 報告書",
  "status_text": "本日 5時46分のサイクルが Claude(Fable 5)の利用上限に当たって途中で終了し、その回の報告書更新が飛んでいました。上限に当たったら自動で別のモデルに切り替えて続行する仕組みが supervisor に入っており、今回のサイクルは実際にその切り替えが働いて動いています(ログに「モデル claude-fable-5 が上限。次のモデル opus で再試行します」の記録を確認しました)。この切り替えの仕組みを説明書(docs/auto-recovery.md)に書き足し、変更を記録として保存しました。オーナーからの指示(コメント)は今回もありませんでしたので、報告書とホームページの見た目・中身は規則どおり変更していません。",
  "site_url": "https://fukuoka-shibuya.github.io/loop-4/site/"
};
