export type RaceAwayEvent="affiliate_click"|"race_page_view"|"ticket_compare_click"|"seat_guide_click";
export function trackEvent(event:RaceAwayEvent,properties?:Record<string,string>){
  // TODO: connect to the chosen analytics provider before launch.
  // Intentionally a no-op in the MVP so no visitor data is collected.
  void event;
  void properties;
}
