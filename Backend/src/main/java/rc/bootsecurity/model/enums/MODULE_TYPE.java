package rc.bootsecurity.model.enums;

public enum MODULE_TYPE {
    Ticket("Ticket"),
    Report("Report"),
    Financie("Financie");

    private final String text;


    MODULE_TYPE(final String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return text;
    }
}
