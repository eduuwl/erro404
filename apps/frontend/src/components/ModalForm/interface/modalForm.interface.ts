export interface ModalFormProps {
    tipo: string;
    onClose: () => void;
    onSubmit: (data: {
      tipo: string;
      quantidadeKg: number;
      turma: string;
      curso: string;
      semestre: string;
      turno: string;
      unidade: string;
    }) => void;
  }
  