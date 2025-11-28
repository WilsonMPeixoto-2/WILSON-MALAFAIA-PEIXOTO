export enum WriteOffReason {
  DESUSO = 'Desuso (Bom estado, sem uso)',
  IMPRESTABILIDADE = 'Imprestabilidade (Danificado, inviável)',
  OBSOLESCENCIA = 'Obsolescência (Ultrapassado)',
  EXTRAVIO = 'Extravio/Dano',
  OUTROS = 'Outros'
}

export interface AssetData {
  requesterName: string;
  unitDesignation: string; // e.g., 04.XX.XXX
  unitName: string; // e.g., EM PRESIDENTE KENNEDY
  assetTag: string;
  description: string;
  location: string;
  acquisitionDate: string;
  reason: WriteOffReason;
  justification: string;
  conditionDescription: string;
  evidenceImage: string | null; // Base64
  checklist: {
    dataWiped: boolean;
    labelRemoved: boolean;
    physicalCheck: boolean;
  };
}

export const INITIAL_ASSET_DATA: AssetData = {
  requesterName: '',
  unitDesignation: '',
  unitName: '',
  assetTag: '',
  description: '',
  location: '',
  acquisitionDate: '',
  reason: WriteOffReason.OBSOLESCENCIA,
  justification: '',
  conditionDescription: '',
  evidenceImage: null,
  checklist: {
    dataWiped: false,
    labelRemoved: false,
    physicalCheck: false,
  },
};