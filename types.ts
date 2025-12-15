export interface NavLink {
  label: string;
  href: string;
}

export interface TokenDistribution {
  // Recharts data props expect an index signature for arbitrary keys.
  // We still keep the concrete fields we use.
  [key: string]: unknown;
  name: string;
  value: number;
  fill: string;
  dotClassName?: string;
}

export interface Artefact {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
