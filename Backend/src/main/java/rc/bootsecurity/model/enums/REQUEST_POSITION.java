package rc.bootsecurity.model.enums;

public enum REQUEST_POSITION {
    Vytvorené("Vytvorené"),
    Priradené("Priradené"),
    Uzatvorené("Uzatvorené"),
    Nepriradené("Nepriradené"),
    Vyriešené("Vyriešené");

    private final String text;


    REQUEST_POSITION(final String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return text;
    }
}
