import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export default function AddNewPet() {
  return (
    <Dialog defaultOpen>
      <DialogTrigger>
        <Button variant="outline">Adicionar Pet</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Novo Pet</DialogTitle>
          <DialogDescription>
            Preencha o formulário para adicionar um novo pet à sua conta.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input className="col-span-3" id="name" placeholder="Digite o nome do pet" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="breed">
              Raça
            </Label>
            <div className="col-span-3">
              <Select>
                <SelectTrigger className="w-full" id="breed">
                  <SelectValue placeholder="Selecione a raça" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="labrador">Labrador</SelectItem>
                    <SelectItem value="poodle">Poodle</SelectItem>
                    <SelectItem value="bulldog">Bulldog</SelectItem>
                    <SelectItem value="golden-retriever">Golden Retriever</SelectItem>
                    <SelectItem value="german-shepherd">Pastor Alemão</SelectItem>
                    <SelectItem value="chihuahua">Chihuahua</SelectItem>
                    <SelectItem value="persian-cat">Persa</SelectItem>
                    <SelectItem value="siamese-cat">Siamês</SelectItem>
                    <SelectItem value="maine-coon">Maine Coon</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="age">
              Idade
            </Label>
            <Input
              className="col-span-3"
              id="age"
              placeholder="Digite a idade do pet"
              type="number"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="weight">
              Peso
            </Label>
            <Input
              className="col-span-3"
              id="weight"
              placeholder="Digite o peso do pet"
              type="number"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="animal">
              Animal
            </Label>
            <div className="col-span-3">
              <RadioGroup defaultValue="dog" id="animal">
                <div className="flex items-center gap-4">
                  <Label className="flex items-center gap-2 cursor-pointer" htmlFor="dog">
                    <RadioGroupItem id="dog" value="dog" />
                    Cachorro
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer" htmlFor="cat">
                    <RadioGroupItem id="cat" value="cat" />
                    Gato
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4 py-2">
            <Label className="text-right" htmlFor="sex">
              Sexo
            </Label>
            <div className="col-span-3">
              <RadioGroup defaultValue="male" id="sex">
                <div className="flex items-center gap-4">
                  <Label className="flex items-center gap-2 cursor-pointer" htmlFor="male">
                    <RadioGroupItem id="male" value="male" />
                    Macho
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer" htmlFor="female">
                    <RadioGroupItem id="female" value="female" />
                    Fêmea
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="foto">
              Foto
            </Label>
            <div className="col-span-3">
              <Input id="foto" type="file" />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              placeholder="Digite a descrição do pet"
            />
          </div>
        </form>
        <DialogFooter>
          <DialogClose>
            <Button variant="ghost">Cancelar</Button>
          </DialogClose>
          <Button type="submit">Salvar Pet</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
